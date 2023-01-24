import React from "react";
import navigationStrings from "./navigationStrings";
import TabRoute from "./TabRoute";


export default function (Stack) {
    return (
    <>
        <Stack.Screen name={navigationStrings.TABROUTE} component={TabRoute} />
    </>
    )
}