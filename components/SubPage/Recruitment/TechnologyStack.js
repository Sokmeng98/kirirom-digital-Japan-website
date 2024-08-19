import React from "react";
import TechnologyItem from "./TechnologyItem";
import { icon } from "@fortawesome/fontawesome-svg-core";

const technologies = {
  ProgrammingLanguages: [
    { id: "java", name: "Java", icon: "/icons/tech_icon/java.png" },
    {
      id: "javascript",
      name: "Javascript",
      icon: "/icons/tech_icon/javascript.png",
    },
    { id: "kotlin", name: "Kotlin", icon: "/icons/tech_icon/kotlin.png" },
    {
      id: "typescript",
      name: "Typescript",
      icon: "/icons/tech_icon/typescript.png",
    },
    { id: "solidity", name: "Solidity", icon: "/icons/tech_icon/solidity.png" },
    { id: "python", name: "Python", icon: "/icons/tech_icon/python.png" },
    { id: "swift", name: "Swift", icon: "/icons/tech_icon/swift.png" },
    { id: "v-lang", name: "v-lang", icon: "/icons/tech_icon/v-lang.png" },
    { id: "c_plus", name: "C++", icon: "/icons/tech_icon/cplus.png" },
    { id: "c#", name: "C#", icon: "/icons/tech_icon/cSharp.png" },
    { id: "go-lang", name: "Go-lang", icon: "/icons/tech_icon/go.png" },
    { id: "mojo", name: "Mojo", icon: "/icons/tech_icon/mojo.png" },
  ],
  CloudServicesAndDatabase: [
    { id: "aws", name: "AWS", icon: "/icons/tech_icon/aws.png" },
    { id: "gcp", name: "GCP", icon: "/icons/tech_icon/gcp.png" },
    {
      id: "postgresql",
      name: "PostgreSQL",
      icon: "/icons/tech_icon/postgresql.png",
    },
    { id: "mysql", name: "MySQL", icon: "/icons/tech_icon/mysql.png" },
    { id: "azure", name: "Azure", icon: "/icons/tech_icon/azure.png" },
    { id: "oracle", name: "Oracle", icon: "/icons/tech_icon/oracle.png" },
    { id: "voltdb", name: "VoltDB", icon: "/icons/tech_icon/voltdb.png" },
    {
      id: "greenplum",
      name: "Greenplum",
      icon: "/icons/tech_icon/greenplum.png",
    },
    {
      id: "netezza",
      name: "Netezza",
      icon: "/icons/tech_icon/netezza.png",
    },
  ],
  FrontendFrameworks: [
    { id: "reactjs", name: "ReactJS", icon: "/icons/tech_icon/reactjs.png" },
    { id: "VueJS", name: "VueJS", icon: "/icons/tech_icon/vuejs.png" },
    { id: "angular", name: "Angular", icon: "/icons/tech_icon/angular.png" },
    { id: "nextjs", name: "NextJS", icon: "/icons/tech_icon/nextjs.png" },
    { id: "figma", name: "Figma", icon: "/icons/tech_icon/figma.png" },
  ],
  MobileAndGameDevelopmentFrameworks: [
    {
      id: "reactNative",
      name: "React Native",
      icon: "/icons/tech_icon/reactNative.png",
    },
    { id: "flutter", name: "Flutter", icon: "/icons/tech_icon/flutter.png" },
    {
      id: "unrealEngine",
      name: "Unreal Engine",
      icon: "/icons/tech_icon/unrealEngine.png",
    },
    { id: "unity", name: "Unity", icon: "/icons/tech_icon/unity.png" },
  ],

  CollaborationTools: [
    { id: "github", name: "GitHub", icon: "/icons/tech_icon/github.png" },
    { id: "slack", name: "Slack", icon: "/icons/tech_icon/slack.png" },
    { id: "g-suite", name: "G Suite", icon: "/icons/tech_icon/gsuite.png" },
  ],
  Other: [{ id: "ble", name: "BLE", icon: "/icons/tech_icon/ble.png" }],
};

const TechnologyStack = () => {
  return (
    <div className="mt-10 md:mt-5">
      <div className="w-fit m-auto">
        <h1 className="text-xl md:text-2xl text-center text-[#091C3E] font-bold">
          Technology Stack
        </h1>
        <div className="h-1 w-full rounded-full bg-red-500 mt-1 mb-2"></div>
      </div>
      <div className="inline-grid md:grid-cols-2 gap-1 h-fit">
        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className="p-2 ">
            <div className="flex flex-row justify-start items-center my-4 gap-2">
              <div className="h-5 w-2 bg-red-500 " />
              <h2 className="font-bold text-sm md:text-lg">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h2>
            </div>

            <div className="uppercase flex gap-4 flex-wrap">
              {items.map((item) => (
                <TechnologyItem
                  key={item.id}
                  src={item.icon}
                  label={item.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
