import Link from "next/link";
import GroupsIcon from '@mui/icons-material/Groups';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import React, { useState } from "react";

export default function PostsNavigation() {
  const [selectedTab, setSelectedTab] = useState('')

  const handleOnClick = (event: React.PointerEvent<HTMLAnchorElement>) => {
    setSelectedTab(event.currentTarget.title)
  }

  return (
    <nav className="flex justify-center gap-16 font-bold mb-2">
      <div>
        <Link href="/feed" title="feed" onClick={handleOnClick}><GroupsIcon/></Link>
      </div>
      <div>
        <Link href="/feed/locations" title="locations" onClick={handleOnClick}>
          <AddLocationAltOutlinedIcon/>
        </Link>
      </div>
      <div>
        <Link href="/feed/episodes" title="episodes" onClick={handleOnClick}>
          <OndemandVideoOutlinedIcon/>
        </Link>
      </div>
    </nav>
  )
}