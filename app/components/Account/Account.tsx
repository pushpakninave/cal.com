"use client";

import React, { useState } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DeleteIcon, LogOutIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

export function Account() {
    const session = useSession();
    const [open, setOpen] = useState(false);
    const username = session?.data?.user?.name;
    const initials = username ? username.slice(0, 2).toUpperCase() : '';
    console.log("session info", session);
    return (
        <div>
            <>
                {/* <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently remove your
                                account and any data your have.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={async () => {
                                    await deleteAccountAction();
                                    // signOut({ callbackUrl: "/" });
                                }}
                            >
                                Yes, delete my account
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog> */}

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"link"} className="flex items-center justify-center">
                            <Avatar className="xs:mr-0">
                                <AvatarImage src={session.data?.user?.image ?? ""} />
                                <AvatarFallback className=" dark:text-white text-black">{initials}</AvatarFallback>
                            </Avatar>
                            <p className='flex md:hidden'>Account</p>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem
                            onClick={() =>
                                signOut({
                                    callbackUrl: "/",
                                })
                            }
                            className="flex items-center"
                        >
                            <LogOutIcon className="mr-2 h-4 w-4" />
                             <p className="">Log Out</p>
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            onClick={() => {
                                setOpen(true);
                            }}
                            className="flex items-center"
                        >
                            <DeleteIcon className="mr-2 h-4 w-4" />
                             <p className="">Delete Account</p>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
        </div>
    )
}