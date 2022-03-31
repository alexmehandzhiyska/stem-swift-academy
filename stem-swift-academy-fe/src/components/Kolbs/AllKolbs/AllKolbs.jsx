import { kolbService } from "../../../services/kolbService";
import { errorNotification } from "../../notification";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import './AllKolbs.css';

const AllKolbs = () => {
    const [kolbs, setKolbs] = useState([]);

    const stateUser = useSelector((state) => state.user.value);
    const user = stateUser.id ? stateUser : JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    
    useEffect(() => {
        kolbService.getByUser(userId)
        .then(response => {
            setKolbs(response.data.kolbs);
        })
        .catch(() => {
            errorNotification('There was an error loading your kolbs. Please try again later!');
        })
    }, [userId]);
    
    return (
        <>
            <h1 className="heading">Notebook</h1>

            <section className="user-kolbs mb-20">
                {kolbs.length == 0 ? <h1 className="heading">You do not have any notes yet!</h1> : kolbs.map((kolb, id) => 
                    <article className="flex flex-col text-lg my-10">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="font-bold w-52 text-blue-500">Question:</td>
                                    <td>{kolb.question}</td>
                                </tr>

                                <tr>
                                    <td className="font-bold text-blue-500">Correct Answer:</td>
                                    <td>{kolb.correct_answer}</td>
                                </tr>

                                <tr>
                                    <td className="font-bold text-blue-500">Your Answer:</td>
                                    <td>{kolb.user_answer}</td>
                                </tr>

                                <tr>
                                    <td className="font-bold text-blue-500">What:</td>
                                    <td>{kolb.what}</td>
                                </tr>

                                <tr>
                                    <td className="font-bold text-blue-500">Why:</td>
                                    <td>{kolb.why}</td>
                                </tr>

                                <tr>
                                    <td className="font-bold text-blue-500">How:</td>
                                    <td>{kolb.how}</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                )}
            </section>
        </>

    )
}

export default AllKolbs;