import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ChallengesDB, db } from "../../../app/services/firebase";
import { TChallenge } from "./challenge-types";

const challengesCollection = collection(db, ChallengesDB);

type TDateFormatFb = {
  seconds: number;
  nanoseconds: number;
};

type TChallengeFb = {
  dateStart: TDateFormatFb;
  lastCheckIn: TDateFormatFb;
};

export const getChallengeInfo = async (UID: string) => {
  const q = query(challengesCollection, where("UID", "==", UID));
  const querySnapshot = await getDocs(q);
  const challenge = [] as TChallenge[];

  querySnapshot.docs.forEach((doc) => {
    const data = doc.data() as TChallengeFb;

    challenge.push({
      idChallenge: doc.id,
      dateStart: data.dateStart.seconds * 1000, // converted s to ms
      lastCheckIn: data.lastCheckIn.seconds * 1000, // converted s to ms
    });
  });
  return challenge.at(0);
};

export const updateLastCheckIn = async ({idChallenge, lastCheckIn}:{idChallenge: string, lastCheckIn: number}) => {
    updateDoc(doc(db, ChallengesDB, idChallenge), {
      lastCheckIn,
    });
  };