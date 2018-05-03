import { Component, OnInit, ViewChild } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

import trueID from '../web3/trueID';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

    userAddress: string;
    @ViewChild('scanner') scanner: ZXingScannerComponent;
    hasCameras = false;
    hasPermission: boolean;
    qrResultString: string;

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo;

    addresses: any;

    user: any;

    constructor(private router: Router) {}

    ngOnInit() {
        this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasCameras = true;

            this.availableDevices = devices;

            if (devices.length > 0) {
                this.selectedDevice = devices[0];
            }
        });

        this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
            console.error(
                'An error has occurred when trying to enumerate your video-stream-enabled devices.'
            );
        });

        this.scanner.permissionResponse.subscribe((answer: boolean) => {
            this.hasPermission = answer;
        });

        this.addresses = localStorage.getItem('accounts');

        if (!this.addresses) {
            this.router.navigate(['/users']);
        } else {
            this.addresses = JSON.parse(this.addresses);
        }
    }

    handleQrCodeResult(resultString: string) {
        this.userAddress = resultString;
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    }

    async onGetDetails() {
        const result = await trueID.methods.getUserDetails("0x281055Afc982d96fAB65b3a49cAc8b878184Cb16").call();
        this.user.fullName = result[0];
        this.user.fatherName = result[1];
        this.user.motherName = result[2];
        this.user.contactAddress = result[3];
        this.user.gender = result[4];
        this.user.birthdate = result[5];
        this.user.country = result[6];
    }

}
