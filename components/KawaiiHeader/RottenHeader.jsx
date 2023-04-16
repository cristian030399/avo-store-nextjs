import { PosMeMuero } from "@components/SVGIcons";
import React from "react";
import { Header } from "semantic-ui-react";

const RottenHeader = () => (
    <Header size="huge" as={'h1'}>
        Platzi
        <PosMeMuero size="58px" />
        Avo
    </Header>
)

export default RottenHeader