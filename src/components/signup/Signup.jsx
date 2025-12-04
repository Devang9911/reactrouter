import React from 'react'
import { useState } from 'react'

function Signup() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-900 p-1">
            


            <div className="w-full max-w-md text-white p-5 rounded-2xl mt-25 mb-5">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    {isLogin ? "Welcome back!" : "Create Account"}
                </h2>


                {/* Form */}
                <form className="flex flex-col gap-4">
                    {/* Register Fields */}
                    {!isLogin && (
                        <>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-gray-300">Username</label>
                                <input
                                    type="text"
                                    className="p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
                                    placeholder="Choose username"
                                />
                            </div>
                        </>
                    )}


                    {/* Login + Register Shared Fields */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            className="p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>


                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            type="password"
                            className="p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
                            placeholder="Enter password"
                        />
                    </div>


                    <button className="mt-2 bg-blue-600 hover:bg-blue-500 transition w-full py-2 rounded-xl font-semibold text-lg">
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>


                {/* Switch */}
                <p className="text-center text-gray-400 mt-6 text-sm">
                    {isLogin ? (
                        <>
                            Don’t have an account?{" "}
                            <button
                                onClick={() => setIsLogin(false)}
                                className="text-blue-400 hover:underline"
                            >
                                Register
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button
                                onClick={() => setIsLogin(true)}
                                className="text-blue-400 hover:underline"
                            >
                                Login
                            </button>
                        </>
                    )}
                </p>
            </div>
        </section>

    )
}

export default Signup