import { MutableRefObject } from "react"

export const copyToClipBoard = async (copyTextRef: MutableRefObject<null>) => {
  try {
    // @ts-ignore
    await navigator.clipboard.writeText(copyTextRef.current.innerHTML)
  } catch (err) {
    console.error(err)
  }
}