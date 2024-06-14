'use client';
import React, { Fragment } from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}
export default function Modal({ show, children, onClose }: ModalProps) {
  return (
    <Transition as={Fragment} show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center"
        onClose={onClose}
      >
        <TransitionChild
          as={Fragment}
          enter="easy-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="easy-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:w-full sm:max-w-2xl">
          {children}
        </DialogPanel>
      </Dialog>
    </Transition>
  );
}
