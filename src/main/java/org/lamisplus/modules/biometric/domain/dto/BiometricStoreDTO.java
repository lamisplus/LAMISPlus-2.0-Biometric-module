package org.lamisplus.modules.biometric.domain.dto;

import java.util.*;


public class BiometricStoreDTO {
    //public static List<CapturedBiometrics> capturedBiometrics;
    private static HashMap<Long, List<CapturedBiometricDto>> patientBiometricStore;
    private static Set<byte[]> storedTemplate;


    public static HashMap<Long, List<CapturedBiometricDto>> addCapturedBiometrics(Long patientId, CapturedBiometricDto capturedBiometric){
        storedBiometricsTemplates(capturedBiometric);
        if(patientBiometricStore == null){
            ArrayList<CapturedBiometricDto> capturedBiometrics = new ArrayList<>();
            patientBiometricStore = new HashMap<>();
            capturedBiometrics.add(capturedBiometric);
            patientBiometricStore.put(patientId, capturedBiometrics );
            return patientBiometricStore;
        }
        if(!BiometricStoreDTO.patientBiometricStore.containsKey(patientId)){
            BiometricStoreDTO.patientBiometricStore = null;
            addCapturedBiometrics(patientId, capturedBiometric);
        }
        patientBiometricStore.get(patientId).add(capturedBiometric);
        return patientBiometricStore;
    }

    public static HashMap<Long, List<CapturedBiometricDto>> getPatientBiometricStore(){
        if(patientBiometricStore == null){
            return new HashMap<Long, List<CapturedBiometricDto>>();
        }
        return patientBiometricStore;
    }

    public static Set storedBiometricsTemplates(CapturedBiometricDto capturedBiometric){
        storedTemplate = storedTemplate != null && !storedTemplate.isEmpty() ? storedTemplate : new HashSet<>();
        storedTemplate.add(capturedBiometric.getTemplate());
        return storedTemplate;
    }
}
