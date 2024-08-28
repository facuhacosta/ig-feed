'use client'

import AccountSelector from "@/components/molecules/AccoutSelector"
import CallTiActionIcons from "@/components/molecules/CallToActionIcons"
import Header from "../Header"
import PostsNavigation from "@/components/molecules/PostsNavigation"
import { useQuery } from "@tanstack/react-query"
import { fetchAccountDettails } from "@/assets/utils"

export default function FeedDetails() {

  const { isLoading, isError, data: accountDetails } = useQuery({
    queryKey: ['accountDetails'],
    queryFn: async () => {
      return await fetchAccountDettails()
    }
  })

  return (
    <>
      <nav className="flex w-full justify-between">
        <AccountSelector currentAccountName={accountDetails?.name} />
        <CallTiActionIcons />
      </nav>
      <Header details={accountDetails} />
      <PostsNavigation />
    </>
  )
}
