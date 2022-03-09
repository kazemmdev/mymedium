import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useEffect, useState} from "react";
import CommentInput from "./CommentInput";
import CloseIcon from '@mui/icons-material/Close';
import {Comment} from "../typings";

interface Props {
    postId: string,
    comments: Comment[],
    show: boolean,
    setClose: (arg: boolean) => void
}

export function Comments({postId, comments, show, setClose}: Props) {
    const [open, setOpen] = useState(show);
    useEffect(() => {
        setOpen(show)
    }, [show])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog className="fixed overflow-hidden inset-0" as="div" open={open} onClose={() => setClose(false)}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm transition-opacity"/>
                    </Transition.Child>
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900"> Responses </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setClose(false)}>
                                                    <CloseIcon />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="relative mt-8">
                                            <CommentInput postId={postId}/>
                                        </div>
                                        <div className="mt-8">
                                            {comments.map((comment: Comment) => (
                                                <div className="border rounded-lg p-4 overflow-hidden" key={comment._id}>
                                                    <span className="text-black font-bold">{comment.name}:</span>
                                                    <p>{comment.message}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default Comments;