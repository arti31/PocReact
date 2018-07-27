import React  from '../../../../../../../Users/arti/Library/Caches/typescript/2.9/node_modules/@types/react';

export const LoginComponent = (params) => 
    (
        <div>
            <br />
            <br />
            <br />
            <h1>Login</h1>
            <form onSubmit={() => { "return false" }}>
                <div>
                    <input type='text' />
                </div>
                <div>
                    <input type='password' />
                </div>
                <button onClick={params.handlesubmit}>Submit</button>
            </form>
        </div>
    )
