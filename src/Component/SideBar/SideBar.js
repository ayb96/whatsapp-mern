import React from 'react'
import './SideBar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton, Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { SidebarChat } from '../SidebarChat/SidebarChat';
export const SideBar = () => {
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <Avatar src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAkFBMVEXeACn////fBC3++/vcABndACHcAB7dACP++fjfBi7wkaHkLkziIj/wjJv4yc/kNVHmQFnteYj2vcTtdIT3wsr0srnmR1398vPlOlbzrLT74ePpW3H50NTaAA3hFzjugo/yoKz619z86+zranzxlqTiJETpWW7qY3bnT2Typaz6293viJj97vD1tLznTWHymqidW6p+AAAE2UlEQVR4nO2aC3eiOhRGSchDLJaq9VHro1rxMVb9///uJkEkQbTNdGr1rm+vVWdxIAc2YQiBEwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4Qw/8RM4ibzlAK6lsei6luzaQXBi4DHxaXoZbmIAUx2UhdYBVIdQKYS3LIqO0N5Ol3VEqmBw/PPUVT0kcqETFIUtRwP00ZPpc8JhwtZ/FsHVYbg3fBQ3GjQrm75LK5aSZM4mLIx6/Hlnsxq4J5SKZD3vkQG2wXkmRm8h4183ZJV4elD8Qi66glDWtQJ1FMiZVDAXlU7fpIaXok6p4tpIlLRMODVmmHctXTqyGj8Ln4tIi4RHypEXapHZYrpGGFumFJ9RIS4k8Hrc0TfOUSSmltT8xMQ7F4ZqFOTeXlz6HRcOWt0iRNBcJjwEjUjvtj5A8G5HQblqIuCktjzUh4UmukHR4kIscG96wCGX7U41sq7Xe6l5EKHut9tCbLRm9GxEZzc6LzKK76RH7MCvyNRm9qoh9U/HtkakjEjoLZCh/pUfMbd5LpDRihcefnJRHVxSZDQ/8eeOeImxpHXhIaq1W6AQW7HoiIZmMAmlQj3uBp8ikOO6QDFIh0oG9Yfu6IiwqGnuKNGyRxiiKRk5kcmURK/t3eqShb1J1O9L8lyJdHkXiooiIitmCp0jziiLJSIjR+wWR5kgU05GbFSHkZVOvb54viLyssnnGcqXb3q5IiQvjSI/etIg13akWOQ7sg9sW+WqPQAQiEIHIvYiE5C5uv5+OI0dmty3yaY/0Bhmzx9sW2SzUU9Taylbx9HsguOGHxi88/X5nPvIlkYIfno/8rEibfPQyPsj2p6e6x+8w3/o/stEiDVeEBtHYwkPDX6Q5ksV3GEdEdWbu54jkcco29mHPRxEd7e1IW3e2lOpPv9iQ5Q9E/1jkLfvU1O8/pdLtkYfD3FFS4Yg8jLIppSOibn9dznf2/IAstAilQgRj9eP75e3vX9B1WGSJELLdv2nWqbR7hJD5e9swtvIahlM3YcJVb0qx6vyZDbavkvuZ+L8yzf95KYnk9LkrkpOyXcXWBeYttoxauWbsZ/L3L7HLIvnUMSmJHOK9WIx7bgr33e/aXFlT8wlL/33E8jpv48/1SFnkQC2WonO+S0Ky07tek3xfNf26/1ZFzl9bIXnklPLUCXV9TK4pQsXzOZOTPZs7NLtVEX3GK030QUdqyHxzRLyeUa4pkn1ZqDBRF5Ye/u5HJNAPUydNlNqQSlp6za0HX89LyyoDOC0Y2JwtGMhEauUVmUhFgzg76a/l+65aeAnMnVY/EtgiCz8R5/SdlHDMz5ZwbJXItCKuBsR+RZhktSqUpS1CrPoGNRIu87IaKlrWxTD1e9qScb1gn6oLmXf3RWDFdVFN/ZT9klPZ3p/E57GU6bZTZvtyKK6hXHQ71sg4bEfHE09V52f9pX8Sr3HErUnKapW4FTClFV8qc7JSSCbKmM2zo6WCjVeb9VbJzd8fJLOqnGjxNe7jydOjotarXF72tcKzzxrYO5TqDGg7faLcujMeNKc1Ev5pRN4ev8LZMjkaMBknacCCu/C4BDUTq7vXMPw/LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwC/wHqbR/aN459xIAAAAASUVORK5CYII="/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                </div>
                
                

            </div>
            <div className="sidebar_search">
                    <SearchIcon/>
                    <div className="sidebar_searchContainer">
                        <input type="text" placeholder="start a new chat"/>

                    </div>

            </div>
            <div className="sidebar_chats">
                <h2 style={{padding:"15px"}}>Add new Chat</h2>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>

            </div>
            
            
        </div>
    )
}
