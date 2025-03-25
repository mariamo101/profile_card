import React from "react";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "bg-blue-500",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "bg-yellow-500",
  },

  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "bg-green-700",
  },
  {
    skill: "React",
    level: "advanced",
    color: "bg-blue-500",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "bg-gray-700",
  },
];

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 border-2 border-black rounded-lg bg-white shadow-lg overflow-hidden">
        <Avatar />
        <div className="p-6">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <img
      src="/me.jpg"
      alt="dev-photo"
      className="w-full h-48 object-cover rounded-t-lg"
    />
  );
}

function Intro() {
  return (
    <>
      <h1 className="text-blue-950 text-xl font-bold font-['Outfit']">
        Mariami Makhniashvili
      </h1>
      <p className="text-slate-500 text-base font-normal font-['Outfit'] mt-2">
        I build fast, responsive, and user-friendly web applications with a
        focus on clean code, performance optimization, and accessibility.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {skills.map((s) => (
        <Skill key={s.skill} skill={s.skill} level={s.level} color={s.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div
      className={`${color} text-white px-3 py-2 rounded-lg flex items-center gap-2`}
    >
      <span>{skill}</span>
      {level === "beginner" && "👶"}
      {level === "intermediate" && "👍"}
      {level === "advanced" && "💪"}
    </div>
  );
}

export default App;
