import React from "react";

const StudentCard = ({name, code, logtime}) => {
  return (
    <div class="student-card">
      <img src="https://picsum.photos/300" alt="pp" class="student-picture" />
      <p class="student-name">{name || "Jonathan Arias Rua"}</p>
      <p class="student-code">{code || "200137471"}</p>
      <p class="student-logtime">{`log time: ${logtime || "10:00:00 AM"}`}</p>
      <button class="delete-attendance">x</button>
    </div>
  );
};

export default StudentCard;
