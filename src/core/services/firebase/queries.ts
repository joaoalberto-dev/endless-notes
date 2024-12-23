import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  FieldPath,
  Firestore,
  getDocs,
  orderBy,
  OrderByDirection,
  query,
} from "firebase/firestore";

async function getCollection(
  db: Firestore,
  collectionName: string,
  order: [string | FieldPath, OrderByDirection] = ["createdAt", "asc"]
) {
  return await getDocs(
    query(collection(db, collectionName), orderBy(...order))
  );
}

async function createCollectionDocument(
  db: Firestore,
  collectionName: string,
  collectionSegment: string,
  content: Record<string, unknown>
) {
  return await addDoc(collection(db, collectionName, collectionSegment), {
    ...content,
    createdAt: Date.now(),
    updatedAt: null,
    deletedAt: null,
  });
}

async function deleteCollectionDocument(
  db: Firestore,
  collectionName: string,
  collectionSegment: string
) {
  await deleteDoc(doc(db, collectionName, collectionSegment));
}

export { createCollectionDocument, deleteCollectionDocument, getCollection };
