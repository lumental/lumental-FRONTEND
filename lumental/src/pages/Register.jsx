import { useState } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        email: "",
        password: "",
        bio: ""
    })

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    
    return(
        <main 
            style={{ 
                maxWidth: 430, 
                margin: '0 auto', 
                padding: '16px 16px 88px', 
                borderLeft: '1px solid rgba(0,0,0,0.08)',borderRight: '1px solid rgba(0,0,0,0.08)', 
            }}
        >
            <div>
                <div>
                    <input
                    name="name"
                    value = {input.name}
                    onChange={onChange}
                    placeholder={"이름"} 
                    />
                </div>

                <div>
                    <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date" 
                    />
                </div>

                <div>
                    <input
                    name="email"
                    value = {input.email}
                    onChange={onChange}
                    placeholder={"email"} 
                    />
                </div>

                <div>
                    <input
                    type="password"
                    name="password"
                    value = {input.password}
                    onChange={onChange}
                    placeholder={"비밀번호"} 
                    />
                </div>

                <div>
                    <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                    />
                </div>
            </div>

        </main>
    
        
    );
}

export default Register;