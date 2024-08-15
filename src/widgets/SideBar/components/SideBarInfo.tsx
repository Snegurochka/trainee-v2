import { memo } from "react"
import { UserWelcome } from "../../UserWelcome/UserWelcome"
import { ChallengeDays } from "../../../features/Challenge"
import { UserHistory } from "../../UserHistory/UserHistory"
import { UserAnswersTotal } from "../../../entities/User/components/UserAnswersTotal"


export const SideBarInfo = memo(() => {
    return <>
    <UserWelcome />
    <UserAnswersTotal />
    <ChallengeDays />
    {/* <SideBarTags /> */}
    <UserHistory />
  </>
  })
  