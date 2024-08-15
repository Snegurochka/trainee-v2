import { useMemo, useState } from "react";
import { useAppSelector } from "../../../shared/services/hooks/redux";
import { Card } from "../../../shared/UI/Card/Card";
import { selectUser } from "../services/user-selectors";
import { UserCardInfo } from "./UserCardInfo";
import { UserCardInfoEdit } from "./UserCardInfoEdit";

export const UserCard = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const user = useAppSelector(selectUser);
  const actionsButtons = useMemo(() => {
    if (isEditMode) {
      return [
        {
          title: "Save",
          action: () => {
            setIsEditMode(false);
            console.log("TODO Save");
          },
        },
        {
          title: "Cancel",
          action: () => setIsEditMode(false),
        },
      ];
    }
    return [
      {
        title: "Edit",
        action: () => setIsEditMode(true),
      },
    ];
  }, [isEditMode]);
  return (
    <Card actionsButtons={actionsButtons}>
      {isEditMode ? (
        <UserCardInfoEdit user={user} />
      ) : (
        <UserCardInfo user={user} />
      )}
    </Card>
  );
};
