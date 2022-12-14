import React from 'react';

import { ModalProps, ScreenProps } from '../../screens';

import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';

export class NavService implements IService {
  private inited = false;

  n: React.RefObject<NavigationContainerRef<ScreenProps>> = React.createRef();
  r: string | undefined;

  init = async (): PVoid => {
    if (!this.inited) {
      this.inited = true;
    }
  };

  // on init methods
  onReady = (): void => {
    this.r = this.n.current?.getCurrentRoute()?.name;
  };

  onStateChange = (): void => {
    const prevName = this.r;
    const currentName = this.n.current?.getCurrentRoute()?.name;

    if (!!prevName && !!currentName) {
      const params = { to: currentName, from: prevName };

    }

    this.r = currentName;
  };

  // Navigation methods
  push = <T extends keyof ScreenProps>(name: T, passProps?: ScreenProps[T]): void => {
    this.n.current?.dispatch(StackActions.push(name, passProps));
  };

  pop = (): void => {
    this.n.current?.goBack();
  };

  show = <T extends keyof ModalProps>(name: T, passProps?: ScreenProps[T]): void => {
    this.navigate(name, passProps);
  };

  private navigate = <T extends keyof ScreenProps>(name: T, passProps?: ScreenProps[T]): void => {
    this.n.current?.dispatch(
      CommonActions.navigate({
        name,
        params: passProps,
      }),
    );
  };
}
