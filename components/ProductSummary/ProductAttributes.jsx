import React from "react";
import { Divider, Header, Table } from "semantic-ui-react";

const ProductAttributes = ({ description, ...otherAttributes }) => (
    <section className="container">
        <Header as='h3'>About this avocado</Header>
        <p>{description}</p>

        <Divider />

        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='2'>Attributes</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {Object.keys(otherAttributes).map((key) => (
                    <Table.Row key={key}>
                        <Table.Cell className="attr-name">{key}</Table.Cell>
                        <Table.Cell>
                            {otherAttributes[key]}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        <style jsx>{`
            .container :global(.attr-name) {
                text-transform: capitalize;
            }
        `}</style>
    </section>
)

export default ProductAttributes