import P2PLayout from "../p2p/P2PLayout"
import Chat from "./chat/Chat"

const Order = () => {
    return (
        <P2PLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 flex-wrap gap-10 h-[500px] pt-10">
                <Chat />
                <div className="h-full bg-gray-200 rounded-lg p-6 text-black">fdf</div>
            </div>
        </P2PLayout>
    )
}

export default Order