import { pathToRoot } from “../util/path” import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from “./types” import { classNames } from “../util/lang” import { i18n } from “../i18n”

const zlonovPageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => { const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title const baseDir = pathToRoot(fileData.slug!) return ( <div> <div class={classNames(displayClass, “zlonov-inline-block”)}></div> <div class={classNames(displayClass, “zlonov-inline-block”)}><h2 class={classNames(displayClass, “page-title”)}><a href={baseDir}>{title}</a></h2></div> </div> ) }

zlonovPageTitle.css = ` .page-title { font-size: 1.75rem; margin: 0; }

.zlonov-inline-block { display: inline-block; vertical-align: middle; margin: 5px; } `

export default (() => zlonovPageTitle) satisfies QuartzComponentConstructor
