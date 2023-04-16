// import { useRouter } from "next/router";
import Database from '../../../database/db'

const allAvos = async (request, response) => {
    const db = new Database();
    const id = request.query.id;
    const entry = await db.getById(id);
    // response.statusCode = 200;
    // response.setHeader('Content-type', 'application/json')
    // response.end(JSON.stringify({data: entry}))

    response.status(200).json(entry)
}

export default allAvos;