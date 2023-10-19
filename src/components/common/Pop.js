import { useImperativeHandle, forwardRef, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';

const Pop = forwardRef(({ children }, ref) => {
    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true)
        }
    });
    return (
        <>
            <AnimatePresence>
                {Open &&
                    <motion.aside className="pop" initial={{ opacity: 0, scale: 0, rotate: 100 }} animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5 } }} exit={{ opacity: 0, rotate: 100, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}>
                        <motion.div className="con" initial={{ opacity: 0, rotate: 100 }} animate={{ rotate: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }} exit={{ opacity: 0, scale: 0, rotate: 100, transition: { duration: 0.5 } }}>{children}</motion.div>
                        <motion.span className='close' initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }} exit={{ opacity: 0, x: 100 }}
                            onClick={() => setOpen(false)}
                        >close</motion.span>
                    </motion.aside>
                }
            </AnimatePresence >
        </>
    )
})

export default Pop