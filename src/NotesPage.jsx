import { useState } from "react";
import Card from "./Card";
import "./index.css";
import Shimmer from "./Shimmer";
// import MenuData from "./SubjectsApi";

const NotesPage = ({ MenuData }) => {
  // console.log(MenuData);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  // console.log(MenuData);
  // Assuming you have cardData defined somewhere
  const filteredCardData = MenuData.filter((card) => {
    // Filter based on selected branch
    return selectedCategory === "" ? card : card.branch === selectedCategory;
  });
  const filterData = filteredCardData.filter((card) => {
    // Filter based on selected semester
    return selectedSemester === "" ? card : card.semester === selectedSemester;
  });

  return (
    <>
      <h1>LIST OF ALL SUBJECTS</h1>
      <div className="container">
        <div className="filter-container">
          <div className="search-container">
            {/* <label htmlFor="subject-search"></label> */}
            <select
              className="input_select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">Select Branch</option>
              <option value="CSE">Computer Science</option>
              <option value="IT">Information Technology</option>
              <option value="CE">Civil</option>
              <option value="ET">Electronics</option>
              <option value="EE">Electrical Engineering</option>
              <option value="ME">Mechanical</option>
              <option value="CHE">Chemical Engineering</option>
              <option value="PT">Plastic Technology</option>
              <option value="OT">Oil Technology</option>
              <option value="BC">Bio Chemical</option>
              <option value="LT">Leather Technology</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="search-container">
            {/* <label htmlFor="subject-search"></label> */}
            <select
              className="input_select"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}>
              <option value="">Select Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {MenuData.length !== 0 && filterData.length === 0 ? (
          <div className="notes_not_found">Sorry! Notes Not Found</div>
        ) : (
          <div className="whole">
            {MenuData.length === 0 ? (
              <>
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
                <Shimmer />
              </>
            ) : (
              filterData.map((card, index) => <Card key={index} data={card} />)
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NotesPage;
