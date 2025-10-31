"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import ToggleButton from "@/components/ui/ToggleButton";
import Button from "./Button";
import { useUserStore } from "@/store/useUserStore";

const settingsItems = [
    {title:"Profile Visibilty", description:"Toggle on or off whether other users can see your profile.",action:(state:Boolean)=>{}},
    {title:"Allow Matches Outside My Region", description:"Choose whether you can be matched to users outside your vicinity.",action:(state:Boolean)=>{}},
]
//to do: add calls to a settings service to be created that will update the settings for the user, you also need to get the settings for the user when the component loads 
//and pass this to the toggle button as the initialState prop 

export default function SettingsModal({isOpen, onClose}:any){
    const { user } = useUserStore();
    return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md relative"
          >
              <h2 className="text-lg font-semibold text-[var(--dark-purple)]">
                Are You Sure You Want To LogOut?
              </h2>
              <p className="text-sm" >
                Logout as {user?.email}
              </p>
              <Button>
                LogOut
              </Button>
              <Button onClick={onClose}>
                Cancel
              </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}