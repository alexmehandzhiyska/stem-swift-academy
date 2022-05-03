import { useState } from 'react';

import ChangeUserData from '../ChangeUserData/ChangeUserData';

import './UserData.css';

const UserData = ({ userData, dataIsModified, setDataIsModified }) => {
    const [formIsOpened, setFormIsOpened] = useState(false);

    return (
        <>
            <table className="user-data flex flex-col border-4 px-4 border-blue-500 border-solid text-xl w-1/3 my-10">
                <tbody className="mt-4">
                    <tr>
                        <td className="pl-10 py-1">Email: </td>
                        <td className="pl-8 py-1">{userData.email}</td>
                    </tr>

                    <tr>
                        <td className="pl-10 py-1">Country: </td>
                        <td className="pl-8 py-1">{userData.country}</td>
                    </tr>

                    <tr>
                        <td className="pl-10 py-1">City: </td>
                        <td className="pl-8 py-1">{userData.city}</td>
                    </tr>

                    <tr>
                        <td className="pl-10 py-1">School: </td>
                        <td className="pl-8 py-1">{userData.school}</td>
                    </tr>

                    <tr>
                        <td className="pl-10 py-1">Graduation Year: </td>
                        <td className="pl-8 py-1">{userData.graduationYear}</td>
                    </tr>
                </tbody>

                <tfoot className="flex justify-center align-center">
                    <tr>
                        <td><button onClick={() => setFormIsOpened(true)} className="btn change-data-btn my-5">Change data</button></td>
                    </tr>
                </tfoot>
            </table>

            <ChangeUserData userData={userData} dataIsModified={dataIsModified} setDataIsModified={setDataIsModified} formIsOpened={formIsOpened} setFormIsOpened={setFormIsOpened}></ChangeUserData>
        </>
    );
}

export default UserData;