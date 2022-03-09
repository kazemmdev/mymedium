import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";

interface IFormInputs {
    _id: string,
    name: string,
    email: string,
    message: string
}

const CommentInput = ({postId}: any) => {
    const [show, setShow] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const {register, handleSubmit, formState: {errors}} = useForm<IFormInputs>();

    const toggleCommentForm = (e: any) => {
        if (e.target.id === "_cm_target") {
            setShow(true)
        }

        if (e.target.id === "_cm_close") {
            setShow(false)
        }
    }

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        setLoading(true);
        await fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            setSubmitted(true)
            setLoading(false);
        }).catch(errors => {
            setSubmitted(false)
            setLoading(false);
        })
    }

    return (<>
            {submitted ? (
                <div className="bg-green-600 border rounded-lg shadow-lg p-4 overflow-hidden">
                    <h2 className="text-white font-bold text-xl">Thank you for your response!</h2>
                    <p className="text-white">Once It has been approved, it will be appear bellow</p>
                </div>

            ) : (
                <div className="bg-white border rounded-lg shadow-lg p-4 overflow-hidden">
                    <form onSubmit={handleSubmit(onSubmit)} onClick={toggleCommentForm}
                          className={"transition-all duration-300 ease-in-out" + (!show ? " -mt-20" : "")}
                          style={{maxHeight: show ? 'max-content' : '100px'}}>
                        <input type="hidden" value={postId} {...register('_id')}/>
                        <input type="text"
                               {...register('name', {required: true})}
                               className="py-2 outline-none w-full"
                               placeholder="Your name here"/>
                        <input type="email"
                               {...register('email', {required: true})}
                               className="pb-2 outline-none w-full"
                               placeholder="Your email here"/>
                        <textarea id="_cm_target" rows={4}
                                  {...register('message', {required: true})}
                                  className="w-full outline-none pt-2"
                                  placeholder="What are your thoughts?"/>
                        <div className="flex flex-col">
                            {errors.name && (
                                <span className="text-red-500"> - The name is required!</span>
                            )}
                            {errors.email && (
                                <span className="text-red-500"> - The email is required!</span>
                            )}
                            {errors.message && (
                                <span className="text-red-500"> - The message is required!</span>
                            )}
                        </div>
                        <div className="flex item-center justify-end space-x-3">
                            <div className="cursor-pointer pt-2 text-gray-500 hover:text-gray-600" id="_cm_close" onClick={toggleCommentForm}>
                                Cancel
                            </div>
                            <button type="submit" className="flex items-center bg-green-300 text-white rounded-full px-4 py-2">
                                Respond
                                {loading && (
                                    <CircularProgress
                                        style={{height: 20, width: 20, color: "white", marginLeft: 10}}
                                    />
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>)

}

export default CommentInput;