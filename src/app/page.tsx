"use client";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const files = useQuery(api.files.getFiles);
  const createFileMutation = useMutation(api.files.createFile);
  return (
    <>
      <SignedIn>
        <UserButton />
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
        {files?.map((file) => <div key={file._id}>{file.name}</div>)}
        <Button
          onClick={() => {
            createFileMutation({ name: "---" });
          }}
        >
          Don't push me away NOOOOOOOOOOO 😭😭
        </Button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
