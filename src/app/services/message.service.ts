import { InjectionToken } from "@angular/core";

export interface MessageService {
  featureHeader: string;
  featureSubheader?: string;
}

export const MESSAGE_SERVICE = new InjectionToken<MessageService>('Message Service');

export const contactMessageService: MessageService = {
  featureHeader: 'You Can Email Us If You Want',
  featureSubheader: 'We will probably help you if you fill out this form',
};

export const aboutMessageService: MessageService = {
  featureHeader: 'New About Us Message',
};

export const loginMessageService: MessageService = {
  featureHeader: 'Welcome to Bethany\'s!',
  featureSubheader: 'We are going to need you to log in for reasons...',
};
