'use client'
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {useState} from "react";

const Page = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    return <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <div className="m-auto font-bold text-2xl">My Todo App</div>
        <Card className="m-auto">
            <Input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}></Input>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
            <button onClick={() => {}}
        </Card>
    </div>
}

export default Page;
