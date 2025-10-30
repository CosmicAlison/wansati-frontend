"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import ToggleButton from "@/components/ui/ToggleButton";

const settingsItems = [
    {title:"Profile Visibilty", description:"Toggle on or off whether other users can see your profile.",action:(state:Boolean)=>{}},
    {title:"Allow Matches Outside My Region", description:"Choose whether you can be matched to users outside your vicinity.",action:(state:Boolean)=>{}},
]
//to do: add calls to a settings service to be created that will update the settings for the user, you also need to get the settings for the user when the component loads 
//and pass this to the toggle button as the initialState prop 

export default function SettingsModal({isOpen, onClose}:any){
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
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[var(--dark-purple)]">
                Settings
              </h2>
              <button onClick={onClose}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex flex-row justify-center p-4 border-b border-gray-200">
              {settingsItems.map((item) => (
                <div className="flex justify-between items-center rounded-sm p-2">
                  <h3 className="text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light">
                    {item.description}
                  </p>
                  <ToggleButton action={item.action} initialState={true}></ToggleButton>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
