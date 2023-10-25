import {
    Clapperboard,
    Clock,
    Film,
    Flame,
    Gamepad2,
    History,
    Home,
    Library,
    Lightbulb,
    ListVideo,
    Music2,
    Newspaper,
    PlaySquare,
    Podcast,
    Radio,
    Repeat,
    Shirt,
    ShoppingBag,
    Trophy,
} from "lucide-react";
import { ScrollSmallSideBarItems } from "../BodySection/ScrollSmallSideBarItems";
import { ScrollLargeSideBarItems } from "../BodySection/ScrollLargeSideBarItems";
import { ScrollLargeSideBarSection } from "../BodySection/ScrollLargeSideBarSection";
import { playlists, subscriptions } from "../../data/sidebar";
import { useSidebarContext } from "../../context/SideBarContext";
import { PageHeaderFirstSection } from "./PageHeader";

export function SideBar() {
    const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
    console.log(isLargeOpen, isSmallOpen, "sasas");
    return (
        <>
            <aside
                className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
                    isLargeOpen ? "lg:hidden" : "lg:flex"
                }`}
            >
                <ScrollSmallSideBarItems Icon={Home} title={"Home"} url="/" />
                <ScrollSmallSideBarItems Icon={Repeat} title={"Shorts"} url="/shorts" />
                <ScrollSmallSideBarItems Icon={Clapperboard} title={"Subscriptions"} url="/subscription" />
                <ScrollSmallSideBarItems Icon={Library} title={"Library"} url="/library" />
            </aside>

            {isSmallOpen && (
                <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"></div>
            )}
            <aside
                className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
                    isLargeOpen ? "lg:flex" : "lg:hidden"
                } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
            >
                <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
                    <PageHeaderFirstSection />
                </div>
                <ScrollLargeSideBarSection>
                    <ScrollLargeSideBarItems isActive Icon={Home} title={"Home"} url="/" />
                    <ScrollLargeSideBarItems Icon={Clapperboard} title={"Subscriptions"} url="/subscription" />
                </ScrollLargeSideBarSection>
                <hr />
                <ScrollLargeSideBarSection visibleItemCount={5}>
                    <ScrollLargeSideBarItems Icon={Library} title="Library" url="/library" />
                    <ScrollLargeSideBarItems Icon={History} title="History" url="/history" />
                    <ScrollLargeSideBarItems Icon={PlaySquare} title="Your Videos" url="/your-videos" />
                    <ScrollLargeSideBarItems Icon={Clock} title="Watch Later" url="/playlist?list=WL" />
                    {playlists.map((playlist) => (
                        <ScrollLargeSideBarItems
                            key={playlist.id}
                            Icon={ListVideo}
                            title={playlist.name}
                            url={`/playlist?list=${playlist.id}`}
                        />
                    ))}
                </ScrollLargeSideBarSection>
                <hr />
                <ScrollLargeSideBarSection title="Subscriptions">
                    {subscriptions.map((subscription) => (
                        <ScrollLargeSideBarItems
                            key={subscription.id}
                            Icon={subscription.imgUrl}
                            title={subscription.channelName}
                            url={`/@${subscription.id}`}
                        />
                    ))}
                </ScrollLargeSideBarSection>
                <hr />
                <ScrollLargeSideBarSection title="Explore">
                    <ScrollLargeSideBarItems Icon={Flame} title="Trending" url="/trending" />
                    <ScrollLargeSideBarItems Icon={ShoppingBag} title="Shopping" url="/shopping" />
                    <ScrollLargeSideBarItems Icon={Music2} title="Music" url="/music" />
                    <ScrollLargeSideBarItems Icon={Film} title="Movies & TV" url="/movies-tv" />
                    <ScrollLargeSideBarItems Icon={Radio} title="Live" url="/live" />
                    <ScrollLargeSideBarItems Icon={Gamepad2} title="Gaming" url="/gaming" />
                    <ScrollLargeSideBarItems Icon={Newspaper} title="News" url="/news" />
                    <ScrollLargeSideBarItems Icon={Trophy} title="Sports" url="/sports" />
                    <ScrollLargeSideBarItems Icon={Lightbulb} title="Learning" url="/learning" />
                    <ScrollLargeSideBarItems Icon={Shirt} title="Fashion & Beauty" url="/fashion-beauty" />
                    <ScrollLargeSideBarItems Icon={Podcast} title="Podcasts" url="/podcasts" />
                </ScrollLargeSideBarSection>
            </aside>
        </>
    );
}
