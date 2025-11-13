import React, { useState } from "react";

const courses = [
    {
        image: "/images/1000110615.jpg",
        title: "Class 6",
        category: "Bangla",
        trending: true,
        badge: "Beginner",
        description: "Learn HTML, CSS, and JavaScript from scratch and build your first website.",
        duration: "8 weeks",
        students: 1240,
        rating: 4.8,
        price: "$49"
    },
    {
        image: "/images/1000110617.jpg",
        title: "Class 7",
        category: "Science",
        trending: true,
        badge: "Intermediate",
        description: "Master data analysis, visualization, and machine learning with Python.",
        duration: "12 weeks",
        students: 890,
        rating: 4.9,
        price: "$79"
    },
    {
        image: "/images/andrew-w-Z5NDgQf5b08-unsplash.jpg",
        title: "Class 8",
        category: "Math",
        trending: false,
        badge: "Beginner",
        description: "Learn SEO, social media marketing, and content strategy.",
        duration: "6 weeks",
        students: 2100,
        rating: 4.7,
        price: "$59"
    },
];

const badgeColors = {
    Beginner: "bg-green-500",
    Intermediate: "bg-blue-500",
    Advanced: "bg-purple-500"
};

const categories = ["All", "Science", "Math", "Bangla", "Design", "Business"];

const CourseMaterial = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Make sure the comparison is robust
    const filteredCourses = selectedCategory === "All"
        ? courses
        : courses.filter(
            course =>
                course.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        );

    return (
        <section className="py-16 bg-gradient-to-b from-purple-400 to-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-indigo-600 mb-2">
                    Explore Our Courses
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Choose from hundreds of courses across various disciplines and start your learning journey today
                </p>
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-4 py-1 rounded-full shadow-sm bg-white text-gray-700 font-medium hover:bg-indigo-50 transition 
                                ${cat === selectedCategory ? "bg-indigo-600 text-primary" : ""}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                {/* Courses grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 px-2">
                    {filteredCourses.length > 0 ? filteredCourses.map((course, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col group hover:shadow-xl hover:-translate-y-2 transition-all duration-200 relative"
                        >
                            <div className="relative">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {course.trending && (
                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold">
                                        &#128293; Trending
                                    </span>
                                )}
                                <span className={`absolute top-3 right-3 px-3 py-1 text-xs text-white rounded-full font-semibold ${badgeColors[course.badge]}`}>
                                    {course.badge}
                                </span>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded mb-1 font-semibold">{course.category}</span>
                                <h3 className="text-lg font-bold mb-2 text-gray-900">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-1">{course.description}</p>
                                <div className="flex items-center text-xs text-gray-400 gap-4 mb-2">
                                    <span>&#x1F551; {course.duration}</span>
                                    <span>&#128101; {course.students}</span>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-yellow-500 font-semibold">&#11088; {course.rating}</span>
                                    <span className="text-indigo-600 font-bold">{course.price}</span>
                                    <button className="ml-auto bg-indigo-600 text-white px-4 py-1.5 rounded-lg font-medium text-xs hover:bg-indigo-700 transition">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-3 text-center text-gray-500">No courses found for this category.</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CourseMaterial;
