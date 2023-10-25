import { CategoryPills } from "./components/BodySection/CategoryPills";
import { VideoGridItem } from "./components/BodySection/VideoGridItem";
import PageHeader from "./components/layouts/PageHeader";
import { SideBar } from "./components/layouts/SideBar";
import { SideBarProvider } from "./context/SideBarContext";
import { categories, videos } from "./data/home";
import { useState } from "react";
export default function App() {
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
    return (
        <SideBarProvider>
            <div className="max-h-screen flex flex-col">
                <PageHeader />
                <div className="grid grid-cols-[auto,1fr] overflow-auto">
                    <SideBar />

                    <div className="overflow-x-hidden px-8 pb-4">
                        <div className="sticky top-0 bg-white z-10 pb-4">
                            <CategoryPills
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onSelect={setSelectedCategory}
                            />
                        </div>
                        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                            {videos.map((video) => (
                                <VideoGridItem key={video.id} {...video} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SideBarProvider>
    );
}
