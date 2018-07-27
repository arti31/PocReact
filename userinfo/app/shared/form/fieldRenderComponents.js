import React from 'react'
import ReactTooltip from 'react-tooltip'
//import PaperTooltip from '../BaseComponents/PaperTooltip';

export const defaultFields = ({input, className, type, placeholder, children, readonly, maxlength, imageSrc, classNameIcon, autoFocus}) => (
	<span>	
	{ type == 'text' && 
  	(<input {...input} maxLength={maxlength} class={className} type={type} placeholder={placeholder} disabled={readonly} autoFocus={autoFocus} />)
  }
  { type == 'password' && 
    (<input {...input} maxLength={maxlength} class={className} type={type} placeholder={placeholder} disabled={readonly}/>)
  }
  { type == 'url' && 
    (<input {...input} class={className} type={type} placeholder={placeholder} disabled={readonly}/>)
  }
  { type == 'select' && 
  (<select {...input} class={className} onChange = {input.onChange} disabled={readonly}>{children}</select>)
	}
  { type == 'textarea' && 
  	(<textarea {...input} maxLength={maxlength} class={className} type={type} placeholder={placeholder} disabled={readonly}></textarea>)
  }
  </span>
)

export const defaultOnboardingFieldComponent = (props) => {
	const {toolTip , labelHint , labelHintText, hint, label, meta: {touched, error}} = props
	let tooltipContent;
	// tooltipContent = (
	//     <PaperTooltip content={labelHintText}>
	//       <a class="tooltip-anchor">{labelHint}</a>
	//     </PaperTooltip>
	// )
	return (
	  <div>
	    	<div class={touched && error ? 'row form-group error' : 'row form-group'}>
					<label class='label-name'>{label} {toolTip == true ? {labelHint} : <span class="hint-text-anchor">{labelHint}</span>}</label>
					<div >{defaultFields(props)} </div>
					{ touched && (error && <span class='error-message'>{error}</span>)}
					{(!touched || !error) && hint && <span class="hint-text yellow-info">{hint} </span> }
	    	</div>
	  </div>
	)
}

export const popupsFieldComponent = (props) => {
	const { label, meta: {touched, error}} = props
	return (
	  <div>
	    <div class={touched && error ? 'rows error-strip' : 'rows'}>
	      <label class='label-name'>{label}</label>
	      {defaultFields(props)}
	      { touched && (error && <label class='error-message'>{error}</label>)}
	    </div>
	  </div>
	)
}

export const dashboardPopupsFieldComponent = (props) => {
	const { label, meta: {touched, error}} = props;
	return (
	  <div>
	    <div class={touched && error ? 'form-group error' : 'form-group'}>
	      <label>{label}</label>
	      {defaultFields(props)}
	      { touched && (error && <label class='error-msg'>{error}</label>)}
	    </div>
	  </div>
	)
}

export const paymentLinkCreateFieldComponent = (props) => {
    const { label, meta: {touched, error}} = props;
    return (
		<div>
			<div class={touched && error ? props.divClass+' error' : props.divClass}>
				<label>{label}</label>
                {defaultFields(props)}
                { touched && (error && <label class='error-msg'>{error}</label>)}
			</div>
		</div>
    )
}


export const paymentLinkInfoFieldComponent = (props) => {
	const {classNameIcon, imageSrc, label, meta: {touched, error}} = props
	return (
	  <div>
	    <div class={touched && error ? 'input-field error' : 'input-field '}>
	    <img src={imageSrc} alt="" class={"icon "+ classNameIcon} />
	      {defaultFields(props)}
	    </div>
	     { touched && (error && <label class='error-message'>{error}</label>)}
	  </div>


	)
}

export const radioComponents = ({input, ulClass, label, labelClass, meta: { onChange, touched, error, onBlur}, children }) => (
	<div class='row'>
    <label class={labelClass}>{label}</label>
    <ul class={ulClass}>
    	{children}
	  </ul>
	</div>
)

export const defaultCheckboxFieldComponent = (props) => {
  const {input, label,id,className, meta: {touched, error}} = props
  return (
		<div class={touched && error ? 'row form-group error' : 'row form-group'}>
			<ul>
				<li class={className}>
					<input {...input} id={id} type="checkbox" />
					<label for={id} class='label-name'>(<span class="red-color">{label}</span>)&nbsp;mandatory</label>
				</li>
			</ul>
      {touched && (error && <label class='error-message'>{error}</label>)}
		</div>
  )
}
