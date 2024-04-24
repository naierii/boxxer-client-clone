import {
  Directive,
  Inject,
  Injector,
  Input,
  NgModuleFactory,
  NgModuleFactoryLoader,
  NgModuleRef,
  OnDestroy,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import { LazyModules, LAZY_MODULES_LOADER_MAP } from './load-module.provider';

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
  selector: '[bosLoadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {
  @Input('bosLoadModule') moduleName: keyof LazyModules;
  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_LOADER_MAP) private modulesMap
  ) {}

  ngOnInit() {
    this.loader
      .load(this.modulesMap[this.moduleName])
      .then((moduleFactory: NgModuleFactory<any>) => {
        this.moduleRef = moduleFactory.create(this.injector);
        const rootComponent = (moduleFactory.moduleType as ModuleWithRoot)
          .rootComponent;

        const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(
          rootComponent
        );

        this.vcr.createComponent(factory);
      });
  }

  ngOnDestroy() {
    if (this.moduleRef) {
      this.moduleRef.destroy();
    }
  }
}
