import { CSSTransition, SwitchTransition } from 'react-transition-group'

export default function FadeInWrapper({ animationKey, children }: { animationKey: number; children: React.ReactNode }) {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition timeout={400} classNames="fade" key={animationKey}>
        {children}
      </CSSTransition>
    </SwitchTransition>
  )
}
