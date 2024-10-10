import dynamic from "next/dynamic"

const RoomChat = dynamic (()=> import("@/app/forum/roomchat/components/roomchat"))
const NavbarRoom = dynamic (()=> import("@/app/forum/roomchat/components/navbarroom"))

export default function RoomPage(){
    return(
        <main>
            <NavbarRoom />
            <RoomChat />
        </main>
    )
}