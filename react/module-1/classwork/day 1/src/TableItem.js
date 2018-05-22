import React from 'react';

const TableItem = ({name: nickname, surname = 'norris',description}) => (
        <div>
            <tr>
                <th className="tg-yw4l">first</th>
                <th className="tg-yw4l">second</th>
            </tr>
            <tr>
                <td className="tg-yw4l">{nickname}</td>
                <td className="tg-yw4l">{surname}</td>
            </tr>
            <tr>
                <td className="tg-yw4l">{description}</td>
                <td className="tg-yw4l">{description}</td>
            </tr>
        </div>

    );




export default TableItem;




