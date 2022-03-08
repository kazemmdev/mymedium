import {Dialog} from '@headlessui/react';
import {useState} from "react";

type Props = {};

const Comments = (props: Props) => {
    const [open, setOpen] = useState(true)

    return (
        <div>
            <Dialog className="fixed overflow-hidden inset-0" as="div" open={open} onClose={() => setOpen(false)}>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="pointer-events-auto w-screen max-w-md">
                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <Dialog.Title className="text-lg font-medium text-gray-900"> Responses </Dialog.Title>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button"
                                                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    onClick={() => setOpen(false)}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div className="bg-white rounded-lg shadow-lg p-4">
                                            <h3 className="">Your Response:</h3>
                                            <form className="">
                                                <input type="text"/>
                                                <input type="email"/>
                                                <textarea />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Comments;