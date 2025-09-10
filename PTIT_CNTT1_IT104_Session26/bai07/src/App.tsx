import { Route, Routes } from "react-router-dom";
import Teams from "./components/Teams";
import TeamIndex from "./components/TeamsIndex";
import Team from "./components/Team";
import "./App.css";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/teams" element={<Teams></Teams>}>
          <Route index element={<TeamIndex></TeamIndex>}></Route>
          <Route path=":teamId" element={<Team></Team>}></Route>
        </Route>
      </Routes>
    </>
  );
}
