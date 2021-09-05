import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import history from "./../../Routes/History";
import { db } from "./../../firebase/utils";

export const submitCreateEvent = async (data) => {
  const storage = getStorage();
  const storageRef = ref(storage, data?.img?.file?.name);
  await uploadBytes(storageRef, data?.img?.file).then((snapshot) => {
    getDownloadURL(ref(storage, data?.img?.file?.name))
      .then((url) => {
        const userRef = db.collection("events").add({
          ...data?.mainData,
          img: url,
        });
        history.push("/events");
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const fetchEvents = async () => {
  const events = [];
  const response = db.collection("events");
  const data = await response.get();
  data.docs.forEach((item) => {
    events.push({ ...item.data(), id: item.id });
  });
  return events;
};

export const fetchEventDetails = async (id) => {
  const response = db.collection(`events`).doc(id);
  const event = await response.get();
  return event.data();
};

export const bookEvent = async (data) =>
  await db
    .collection("events")
    .doc(data?.id)
    .set({ ...data });

// await db.collection("events").doc(data?.id).set({ data }, { merge: true });

// db.child(key).update(value);
