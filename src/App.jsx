// import React from "react";

// const App = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen ">
//       <div className="w-80 h-[497px]  border-[3px] border-black flex-col items-center justify-center bg-white shadow-lg">
//         <Avatar />
//         <div className="mx-6 my-4  mb-[10px]">
//           <Intro />
//           <SkillList />
//         </div>
//       </div>
//     </div>
//   );
// };

// function Avatar() {
//   return (
//     <img
//       src="/me.jpg"
//       alt="dev-photo"
//       className="w-full h-[calc(100%/2)] object-cover self-start"
//     />
//   );
// }
// function Intro() {
//   return (
//     <>
//       <h1 className="w-64  justify-start text-blue-950 text-xl font-bold font-['Outfit']">
//         Mariami Makhniashvili
//       </h1>
//       <p className="w-64 left-[16px] top-[72px]   justify-start text-slate-500 text-base font-normal font-['Outfit']">
//         I build fast, responsive, and user-friendly web applications with a
//         focus on clean code, performance optimization, and accessibility.
//       </p>
//     </>
//   );
// }
// function SkillList() {
//   return (
//     <div className=" w-64  flex flex-wrap gap-4">
//       <Skill skill="React" emoji="👌" color="bg-green-700" />
//       <Skill skill="JavaScript" emoji="💪" color="bg-red-700" />
//       <Skill skill="Tailwind" emoji="🥲" color="bg-pink-800" />
//       <Skill skill="Git and Github" emoji="🏆" color="bg-lime-900" />
//     </div>
//   );
// }
// function Skill(props) {
//   return (
//     <div className={`${props.color} rounded-lg p-2`}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }
// export default App;

import React from "react";

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
      <Skill skill="React" emoji="⚛️" color="bg-green-700" />
      <Skill skill="JavaScript" emoji="💪" color="bg-yellow-500" />
      <Skill skill="Tailwind" emoji="💙" color="bg-blue-500" />
      <Skill skill="Git & GitHub" emoji="🏆" color="bg-gray-700" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div
      className={`${color} text-white px-3 py-2 rounded-lg flex items-center gap-2`}
    >
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

export default App;
