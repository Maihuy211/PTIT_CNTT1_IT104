import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Spin } from "antd";
import "./App.css";
import { LoadingOutlined } from "@ant-design/icons";
const LazyLoadComp = lazy(() => import("./components/LazyLoadComp"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div>
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 48 }} spin />
                    }
                  />
                </div>
              }
            >
              <LazyLoadComp />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
