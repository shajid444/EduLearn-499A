import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import CourseMaterial from "../Pages/Home/CourseMaterial/CourseMaterial";
import AiLearningAssistant from "../Pages/AiLearningAssistant/AiLearningAssistant";
import Videos from "../Pages/Videos/Videos";
import AboutSection from "../Pages/AboutSection/AboutSection";
import ContactFaqSection from "../Pages/Contact/ContactFaqSection";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [

        {
            index:true,
            Component: Home
        },
        
        {
            path:"course",
            Component: CourseMaterial
        },
         {
            path:"ai",
            Component: AiLearningAssistant
        },
         {
            path:"video",
            Component: Videos
        },

        {
            path:"about",
            Component: AboutSection
        },
        {
            path:"contact",
            Component: ContactFaqSection
        }

    ]
  },
]);