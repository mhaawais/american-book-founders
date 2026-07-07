(function () {
    function setFooterYear() {
        const year = document.getElementById("year");

        if (year) {
            year.textContent = new Date().getFullYear();
        }
    }

    function initStickyHeader() {
        const header = document.querySelector("header");

        if (!header) {
            return;
        }

        let spacer = document.querySelector(".header-spacer");

        if (!spacer) {
            spacer = document.createElement("div");
            spacer.className = "header-spacer";
            header.insertAdjacentElement("afterend", spacer);
        }

        function syncHeaderHeight() {
            document.documentElement.style.setProperty("--header-height", header.offsetHeight + "px");
        }

        syncHeaderHeight();
        window.addEventListener("resize", syncHeaderHeight);

        header.querySelectorAll("[data-bs-toggle='collapse']").forEach(function (toggle) {
            toggle.addEventListener("click", function () {
                setTimeout(syncHeaderHeight, 350);
            });
        });
    }

    async function getUserIP() {
        try {
            const response = await fetch("https://api.ipapi.is/", {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "Accept": "application/json",
                    "Referer": "https://ipapi.is/",
                    "Origin": "https://ipapi.is"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const location = data.location || {};

            document.querySelectorAll(".ip").forEach((el) => el.value = data.ip || "");
            document.querySelectorAll(".city").forEach((el) => el.value = location.city || "");
            document.querySelectorAll(".country").forEach((el) => el.value = location.country || "");
            document.querySelectorAll(".zip_code").forEach((el) => el.value = location.zip || "");
        } catch (error) {
            console.error("Error fetching IP details:", error);
        }
    }

    function initModal() {
        const modal = document.getElementById("ctaModal");

        if (!modal) {
            return;
        }

        const closeButton = modal.querySelector("[data-close-modal]");
        const form = modal.querySelector("form");

        function openModal() {
            modal.classList.add("is-open");
            document.body.classList.add("modal-open");
            modal.setAttribute("aria-hidden", "false");
        }

        function closeModal() {
            modal.classList.remove("is-open");
            document.body.classList.remove("modal-open");
            modal.setAttribute("aria-hidden", "true");
        }

        window.openModal = openModal;
        window.closeModal = closeModal;

        if (closeButton) {
            closeButton.addEventListener("click", closeModal);
        }

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });

        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();

                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }

                const phoneInput = form.querySelector(".countryCode");
                const fullPhoneInput = form.querySelector(".fullPhoneNumber");

                if (phoneInput && fullPhoneInput) {
                    fullPhoneInput.value = (phoneInput.dataset.dial || "") + phoneInput.value.replace(/\D/g, "");
                }

                form.reset();
                closeModal();
            });
        }
    }

    function initLeadForms() {
        if (!window.jQuery || !jQuery.validator) {
            return;
        }

        const $ = window.jQuery;
        const formClass = ".MyForm, .myForm";
        const phoneInputClass = ".countryCode";
        const fullPhoneClass = ".fullPhoneNumber";

        function initCountryCodeSelectors() {
            const preferredCountries = ["us", "ca", "gb", "au", "pk", "in"];

            function getCountries() {
                if (!Array.isArray(window.allCountries)) {
                    return [];
                }

                const countries = window.allCountries.map(function (country) {
                    return {
                        name: country.name,
                        iso2: country.iso2,
                        dialCode: "+" + country.dialCode
                    };
                });

                return countries.sort(function (a, b) {
                    const preferredA = preferredCountries.indexOf(a.iso2);
                    const preferredB = preferredCountries.indexOf(b.iso2);

                    if (preferredA !== -1 || preferredB !== -1) {
                        if (preferredA === -1) {
                            return 1;
                        }

                        if (preferredB === -1) {
                            return -1;
                        }

                        return preferredA - preferredB;
                    }

                    return a.name.localeCompare(b.name);
                });
            }

            function renderCountryOptions(menu) {
                const countries = getCountries();

                if (!countries.length || menu.dataset.generated === "true") {
                    return;
                }

                menu.innerHTML = countries.map(function (country, index) {
                    const divider = index === preferredCountries.length ? '<div class="country-code-divider" aria-hidden="true"></div>' : "";

                    return divider +
                        '<button type="button" data-country="' + country.iso2 + '" data-dial="' + country.dialCode + '" role="option">' +
                            '<span class="iti__flag iti__' + country.iso2 + '"></span>' +
                            '<span>' + country.name + '</span>' +
                            '<strong>' + country.dialCode + '</strong>' +
                        '</button>';
                }).join("");

                menu.dataset.generated = "true";
            }

            document.querySelectorAll(".phone-field").forEach(function (field) {
                const toggle = field.querySelector(".country-select-toggle");
                const menu = field.querySelector(".country-code-menu");
                const input = field.querySelector(phoneInputClass);
                const flag = field.querySelector(".country-select-toggle .iti__flag");
                const dialLabel = field.querySelector(".selected-dial-code");

                if (!toggle || !menu || !input || field.dataset.countryReady === "true") {
                    return;
                }

                renderCountryOptions(menu);

                field.dataset.countryReady = "true";
                input.setAttribute("placeholder", "Phone Number");

                toggle.addEventListener("click", function () {
                    const isOpen = field.classList.toggle("is-open");
                    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
                });

                menu.querySelectorAll("button").forEach(function (option) {
                    option.addEventListener("click", function () {
                        const country = option.dataset.country || "us";
                        const dial = option.dataset.dial || "+1";

                        flag.className = "iti__flag iti__" + country;
                        dialLabel.textContent = dial;
                        input.dataset.dial = dial;
                        field.classList.remove("is-open");
                        toggle.setAttribute("aria-expanded", "false");
                        input.focus();
                    });
                });

                document.addEventListener("click", function (event) {
                    if (!field.contains(event.target)) {
                        field.classList.remove("is-open");
                        toggle.setAttribute("aria-expanded", "false");
                    }
                });
            });
        }

        initCountryCodeSelectors();

        $(phoneInputClass).each(function () {
            const $input = $(this);

            if ($input.closest(".phone-field").length) {
                $input.on("input", function () {
                    this.value = this.value.replace(/[^\d\s\-\(\)]/g, "");
                });
                return;
            }

            if (!jQuery.fn.intlTelInput) {
                return;
            }

            $input.intlTelInput({
                initialCountry: "us",
                separateDialCode: true,
                formatOnDisplay: true,
                nationalMode: true,
                autoPlaceholder: "polite",
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
                customPlaceholder: function (selectedCountryPlaceholder) {
                    return selectedCountryPlaceholder.replace(/[0-9]/g, "x");
                }
            });

            $input.on("input", function () {
                this.value = this.value.replace(/[^\d\s\-\(\)]/g, "");
            });
        });

        $.validator.addMethod("validPhone", function (value, element) {
            const $form = $(element).closest(formClass);
            const $phoneInput = $form.find(phoneInputClass);

            if ($phoneInput.closest(".phone-field").length) {
                const digits = value.replace(/\D/g, "");
                return digits.length >= 6 && digits.length <= 15;
            }

            if (!jQuery.fn.intlTelInput) {
                const digits = value.replace(/\D/g, "");
                return digits.length >= 6 && digits.length <= 15;
            }

            return $phoneInput.intlTelInput("isValidNumber");
        }, "Please enter a valid phone number");

        $(formClass).each(function () {
            const $form = $(this);

            $form.validate({
                ignore: [],
                debug: false,
                errorClass: "error",
                rules: {
                    service: {
                        required: true
                    },
                    name: {
                        required: true,
                        minlength: 3
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 3
                    },
                    phone: {
                        required: true,
                        minlength: 6,
                        maxlength: 15,
                        validPhone: true
                    },
                    "book-title": {
                        required: true
                    }
                },
                messages: {
                    service: "Please select service",
                    name: {
                        required: "Please enter your name",
                        minlength: "Name must be more than 3 characters long"
                    },
                    email: {
                        required: "Please enter your email",
                        email: "Please enter valid email"
                    },
                    message: {
                        required: "Please enter your message",
                        minlength: "Message must be more than 3 characters long"
                    },
                    phone: {
                        required: "Please enter your phone",
                        validPhone: "Invalid number for selected country",
                        minlength: "Please enter at least 6 digits",
                        maxlength: "Please enter no more than 15 digits"
                    },
                    "book-title": "Please enter book title"
                },
                errorPlacement: function (error, element) {
                    if (element.hasClass("ct-inp")) {
                        error.insertAfter(element);
                    } else if (element.parent(".input-group").length) {
                        error.insertAfter(element.parent());
                    } else if (element.attr("name") === "phone" && element.closest(".phone-field").length) {
                        error.insertAfter(element.closest(".phone-field"));
                    } else if (element.attr("name") === "phone") {
                        error.insertAfter($form.find(".iti--allow-dropdown"));
                    } else {
                        error.insertAfter(element);
                    }
                },
                submitHandler: function (form) {
                    const $form = $(form);
                    const $phone = $form.find(phoneInputClass);
                    const phoneValue = $phone.val().replace(/\D/g, "");
                    const customDial = $phone.attr("data-dial");
                    const fullNumber = customDial
                        ? customDial + phoneValue
                        : $phone.intlTelInput("getNumber");

                    $form.find(fullPhoneClass).val(fullNumber);
                    form.submit();
                }
            });
        });
    }

    function loadScript(script) {
        const lazyScript = document.createElement("script");

        lazyScript.setAttribute("src", script);
        lazyScript.setAttribute("defer", true);
        document.body.appendChild(lazyScript);
    }

    function initLazySliderScripts() {
        const sliders = [
            {
                selector: ".books-slider",
                script: "assets/js/books-slidera833.js"
            },
            {
                selector: ".writer-slider",
                script: "assets/js/writer-slidere488.js"
            },
            {
                selector: ".brands-slider",
                script: "assets/js/brands-slidereb3d.js"
            },
            {
                selector: ".services-slider",
                script: "assets/js/services-slider7e0e.js"
            },
            {
                selector: ".book-collections",
                script: "assets/js/book-collections74b6.js"
            }
        ];

        sliders.forEach(function (slider) {
            const element = document.querySelector(slider.selector);

            if (!element) {
                return;
            }

            let pending = true;
            const load = function () {
                if (!pending) {
                    return;
                }

                loadScript(slider.script);
                pending = false;
            };

            element.addEventListener("mouseover", load, { once: true });
            setTimeout(load, 100);
        });

        setTimeout(function () {
            const spinnerBorder = document.createElement("link");

            spinnerBorder.href = "assets/frontend/css/spinner-border90c9.css";
            spinnerBorder.rel = "stylesheet";
            spinnerBorder.type = "text/css";
            document.head.appendChild(spinnerBorder);
        }, 100);
    }

    let pageInitialized = false;

    function initPage() {
        if (pageInitialized) {
            return;
        }

        pageInitialized = true;
        setFooterYear();
        initStickyHeader();
        getUserIP();
        initModal();
        initLeadForms();
        initLazySliderScripts();
    }

    document.addEventListener("components:loaded", initPage);

    function initPageWhenReady() {
        if (document.querySelector("[data-component]")) {
            return;
        }

        initPage();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPageWhenReady);
    } else {
        initPageWhenReady();
    }
})();
