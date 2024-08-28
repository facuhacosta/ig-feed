'use client'
import { useParams } from "next/navigation"

export default function Card() {

  const params = useParams()
  return <p>{params.id}</p>
}